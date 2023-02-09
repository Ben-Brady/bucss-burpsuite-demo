<script lang="ts">
  import Comments from "$lib/CommentList.svelte";
  import CommentWriter from "$lib/CommentCreator.svelte";
  import Loading from "$lib/Loading.svelte";
  import { onMount } from "svelte";  
  import rug from "random-username-generator";

  $: comments = null;
  async function createComment(event: CustomEvent<any>) {
    let text = event.detail;
    
    let r = await fetch("/csv/api/add", {
      method: "POST",
      body: JSON.stringify({
        text,
        user: localStorage.getItem("username"),
      }),
    })

    if (r.status == 400) {
      let error = await r.text();
      alert(error)
    } else {
      await loadComments();
    }
  }
  async function loadComments() {
    let r = await fetch("/csv/api/get");
    comments = await r.json();
  }

  const onload = async () => {
    if (!localStorage.getItem("username")) {
      let username = rug.generate();
      localStorage.setItem("username", username);
    }

    await loadComments()
  }
  onMount(onload)
</script>

<main>
  <div style="grid-row: 1 / 2;">
    <div id="image-container">
      <img
        id="blog-image"
        width="1024"
        height="1024"
        src="https://thiscatdoesnotexist.com/"
        alt=""
      />
    </div>
  </div>
  <div id="comment-list">
    {#if comments == null}
      <Loading/>
    {:else}
      <div style="grid-column: 1 / 5;">
        <Comments {comments}/>
      </div>
    {/if}
    <div id="comment-writer">
      <CommentWriter on:submit={(event) => createComment(event)}/>
    </div>
  </div>
</main>

<style>
  main {
    max-width: min(50vw, 30rem);
    min-width: min(50vw, 30rem);
    max-height: 90vh;
    min-height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    
    overflow-y: auto;
    width: min-content;
    height: min-content;

    padding-top: 1rem;
    border-radius: 1rem;
    background-color: var(--COLOR-4);
    border: solid .1rem var(--COLOR-5);
  }

  div#comment-list {
    width: 100%;
  }

  div#comment-writer {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img#blog-image {
    width: 20rem;
    height: auto;
  }
</style>