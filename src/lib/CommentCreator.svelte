<script lang="ts">
  import DOMPurify from 'dompurify';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let comment = "";
  
  async function createComment() {
    let clean = DOMPurify.sanitize(comment);
    dispatch("submit", clean);
    comment = "";
  }
</script>

<div>
  <textarea bind:value={comment}/>
  <button on:click={createComment}>
    Submit Comment
  </button>
</div>


<style>
  div {
    width: 80%;

    padding: .5rem;
    background: var(--COLOR-3);
    border: .2rem solid var(--COLOR-4);
    border-radius: 1rem;

    display: flex;
    flex-flow: column nowrap;
  }
</style>