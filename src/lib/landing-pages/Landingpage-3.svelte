<script lang="ts">
    import type { Component } from 'svelte';
    import { Heart, Download } from 'svelte-bootstrap-icons';

    let {
        greeting = 'Hi,',
        role = "I'm Full Stack Developer",
        description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Aut excepturi magnam enim officiis facilis numquam corporis
quos accusantium tempora, dolores quod cum facere architecto
soluta atque corrupti a alias perferendis.`,
        followText = 'Follow',
        resumeText = 'Resume',
        image = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
        FollowIcon = Heart as unknown as Component,
        ResumeIcon = Download as unknown as Component,
        onFollow = () => {},
        onResume = () => {},
    }: {
        greeting?: string;
        role?: string;
        description?: string;
        followText?: string;
        resumeText?: string;
        image?: string;
        FollowIcon?: Component;
        ResumeIcon?: Component;
        onFollow?: () => void;
        onResume?: () => void;
    } = $props();
</script>

<div class="flex h-screen items-center justify-center bg-surface-secondary p-5">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
        
        <!-- LEFT SIDE -->
        <div>
            <h1 class="mb-2 text-3xl font-bold">
                <span class="text-accent">{greeting}</span> {role}
            </h1>

            <p class="mb-6">{description}</p>

            <div class="flex justify-center space-x-5">
                <button class="btn btn-primary w-full" onclick={onFollow}>
                    {followText}
                    <FollowIcon />
                </button>

                <button class="btn btn-secondary w-full" onclick={onResume}>
                    {resumeText}
                    <ResumeIcon />
                </button>
            </div>
        </div>

        <!-- RIGHT SIDE IMAGE -->
        <div>
            <img src={image} alt="Profile" class="md:size-96 size-72 rounded-full" />
        </div>

    </div>
</div>
