<div class="wrapper">
    <div class="box">
        <div>
            <h1>Welcome to ImageAlchemy!</h1>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ipsum eget nisi vulputate maximus. Pellentesque enim dolor, luctus vel erat id, finibus aliquet eros. Cras nisl metus, imperdiet id dictum quis, tincidunt vitae elit. Maecenas et ex nec metus efficitur suscipit sed nec ipsum. Cras vehicula enim vel congue rutrum. Donec dolor sem, varius pulvinar sem nec, convallis accumsan dolor.
            </p>
        </div>
    </div>
</div>
<style lang="scss">
    @import "./colors.scss";
    .wrapper {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        .box {
            width: 50%;
            height: 80%;
            background-color: white;
            box-shadow: $grey 0 0 0 6px;
            border-radius: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 50px;
            h1 {
                font-size: 3rem;
                font-weight: 800;
            }
            p {
                font-size: 1.3rem;
                font-weight: 500;
                padding: 20px 0;
            }
        }
    }
</style>