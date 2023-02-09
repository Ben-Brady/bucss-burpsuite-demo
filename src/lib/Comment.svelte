<script lang="ts">
  import { onMount } from "svelte";
  export let name: string;
  export let text: string;

  $: isMyComment = false;

  onMount(() => {
    isMyComment = localStorage.getItem("username") == name
  })
</script>


<div>
  {#if isMyComment}
    <span>
      {name} (You)
    </span>
  {:else}
    <span>
      {name}
    </span>
  {/if}
  <p>
    {@html text}
  </p>
</div>


<style>
  div {
    padding: .5rem;
    width: 80%;
    background: var(--COLOR-3);
    border: .2rem solid var(--COLOR-4);
    border-radius: 1rem;
  }

  span {
    font-size: larger;
    font-weight: bolder;
  }
  
  p {
    font-size: medium;
    font-weight: normal;
  }
</style>