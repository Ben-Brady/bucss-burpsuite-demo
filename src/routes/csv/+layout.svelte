<slot />

<style>
  :global(*) {
    --COLOR-1: #d9bbf9;
    --COLOR-2: #cca7a2;
    --COLOR-3: #aa9fb1;
    --COLOR-4: #7871aa;
    --COLOR-5: #4e5283;
  }

  :global(body) {
    width: 100vw;
    height: 100vh;
    padding: 0;
		margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--COLOR-1);
		font-family: "Lato", sans-serif;
  }
	
	/* latin */
	@font-face {
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2) format("woff2");
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		font-display: swap;
	}

	/* latin-ext */
	@font-face {
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXjeu.woff2) format("woff2");
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
			U+2C60-2C7F, U+A720-A7FF;
		font-display: swap;
	}
</style>
