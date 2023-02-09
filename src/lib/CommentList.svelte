<script lang="ts">
  import Comment from "./Comment.svelte";
  export let comments: Comment[] = [];
  type Comment = {
      user: string,
      text: string,
  };
</script>

<h2>
  Comment List
</h2>
<div>
  <Comment name="Dave (Owner)" text="<b>What a lovely cat</b>"/>
  {#each comments as comment}
    <Comment name={comment.user} text={comment.text}/>
  {/each}
</div>

<style>
  div {
    height: 15rem;
    
    margin: 1rem;
    padding: 1rem;
    margin-left: 0rem;
    overflow-y: auto;

    display: flex;
    flex-flow: nowrap column;
    gap: 1rem;
  }
</style>