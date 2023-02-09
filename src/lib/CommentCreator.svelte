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

<form on:submit={createComment}>
  <textarea bind:value={comment}/>
  <input type="submit" value="Submit Comment"/>
</form>


<style>
  form {
    width: 80%;

    padding: .5rem;
    background: var(--COLOR-3);
    border: .2rem solid var(--COLOR-4);
    border-radius: 1rem;

    display: flex;
    flex-flow: column nowrap;
  }
</style>