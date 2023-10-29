<script lang="ts">
    import Icon from "@iconify/svelte";
    import { showPopup } from "$lib/stores";
</script>


<div>
    <button on:click={() => showPopup.set(true)}>
        <Icon icon="fa6-solid:question" height=30 color="#2E2E2E" />
    </button>
</div>

<style lang="scss">
    @import "./colors.scss";
    button {
        border: 0;
        padding: 8px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D9D9D9;
        border-radius: 50px;
        box-shadow: $grey 0 0 0 4px,
                    $grey 1px 2px 0 4px;
        cursor: pointer;
    }
</style>