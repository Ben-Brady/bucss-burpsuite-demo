<script lang="ts">
  import Comment from "./Comment.svelte";
  export let comments: Comment[] = [];
  type Comment = {
      user: string,
      text: string,
  };
</script>

<div>
  <Comment name="Dave (Owner)" text="<b>What a lovely cat</b>"/>
  {#each comments as comment}
    <Comment name={comment.user} text={comment.text}/>
  {/each}
</div>

<style>
  div {
    height: 100%;
    width: 100%;
      
    margin: 1rem;
    padding: 1rem;
    margin-left: 0rem;

    display: flex;
    flex-flow: nowrap column;
    gap: 1rem;
  }
</style>