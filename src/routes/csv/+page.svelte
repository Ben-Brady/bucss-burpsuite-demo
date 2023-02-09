<script lang="ts">
  import Comments from "$lib/CommentList.svelte";
  import CommentWriter from "$lib/CommentCreator.svelte";
  import Loading from "$lib/Loading.svelte";
  import { onMount } from "svelte";  
  import rug from "random-username-generator";

  $: comments = null;
  async function createComment(event: CustomEvent<any>) {
    let text = event.detail;

    comments.push({
      user: localStorage.getItem("username"),
      text
    });

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

  <div>
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
  <div id="comment">
      <div id="comment-writer">
        <CommentWriter on:submit={(event) => createComment(event)}/>
      </div>
    {#if comments == null}
      <Loading/>
    {:else}
      <div id="comment-list">
        <Comments {comments}/>
      </div>
    {/if}
  </div>
</main>

<style>
  main {
    height: 95vh; 

    display: grid;
    align-items: flex-start;
    justify-content: center;
    grid-template-columns: repeat(1fr, 2);
    grid-template-rows: auto;
    grid-template-areas: 
      "left right"
  }

  img#blog-image {
    grid-area: left;
    width: auto;
    height: auto;
  }

  div#comment {
    grid-area: right;
    height: 100%;
  }
  
  div#comment-writer {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  div#comment-list {
    width: 100%;
    height: 60vh;
    overflow-y: auto;
    display: flex;
    justify-content: center;
  }
  
</style>