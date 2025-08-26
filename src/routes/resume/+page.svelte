<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<div class="resume-container">
				<a href={data} download>
					<Chip size={'1.25em'}>Download</Chip>
				</a>
				
				<div class="pdf-preview">
					<iframe 
						src={data} 
						width="100%" 
						height="1080px"
						title="Resume Preview"
						class="pdf-iframe"
					>
						<p>Your browser doesn't support PDF preview. <a href={data}>Click here to download</a></p>
					</iframe>
				</div>
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}

	.resume-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		width: 100%;
		max-width: 800px;
	}

	.pdf-preview {
		width: 100%;
		margin-top: 20px;
		border: 1px solid var(--border);
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.pdf-iframe {
		border: none;
		display: block;
	}
</style>