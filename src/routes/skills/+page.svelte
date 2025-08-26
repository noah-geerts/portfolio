<script lang="ts">
	import { base } from '$app/paths';
	import { title, groupByCategory } from '@data/skills';
	import { getAssetURL } from '$lib/data/assets';
	import * as projects from '@data/projects';
	import * as experiences from '@data/experience';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';

	let result = groupByCategory('');

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		result = groupByCategory(query.trim().toLowerCase());
	};

	const getRelatedItems = (skillSlug: string) => {
		const related: Array<{ display: string; name: string; img: string; type: 'projects' | 'experience'; url: string }> = [];

		// Get related projects
		projects.items.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skillSlug)) {
				related.push({
					img: getAssetURL(item.logo),
					display: `${item.name}`,
					name: item.name,
					type: 'projects',
					url: `/projects/${item.slug}`
				});
			}
		});

		// Get related experience
		experiences.items.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skillSlug)) {
				related.push({
					img: getAssetURL(item.logo),
					display: `${item.name} @ ${item.company}`,
					name: item.name,
					type: 'experience',
					url: `/experience/${item.slug}`
				});
			}
		});

		return related;
	};
</script>

<SearchPage {title} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="col mt-5 gap-7">
			{#each result as group (group.category.slug)}
				<div class="col gap-5 mb-7">
					<div class="row items-center gap-5">
						<div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
						<p class="text-[var(--main-close)]">{group.category.name}</p>
						<div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 ">
						{#each group.items as skill (skill.slug)}
							{@const relatedItems = getRelatedItems(skill.slug)}
							<div class="col gap-3">
								<Card
									classes={['decoration-none']}
									tiltDegree={1}
									bgImg={getAssetURL(skill.logo)}
									color={skill.color}
								>
									<p class="text-[var(--tertiary-text)]">{skill.name}</p>
								</Card>
								{#if relatedItems.length > 0}
									<div class="col gap-2">
										{#each relatedItems as item}
											<Chip
												classes="inline-flex flex-row items-center justify-center cursor-pointer overflow-hidden"
												href={`${base}${item.url}`}
											>
												<CardLogo src={item.img} alt={item.name} radius={'0px'} size={15} classes="mr-2 flex-shrink-0" />
												<span class="text-[0.8em] truncate min-w-0">{item.display}</span>
											</Chip>
										{/each}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
