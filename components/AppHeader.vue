<template>
    <header>
        <a href="#">
            <!-- <img src="/logo.svg" role="img" loading="eager"> -->
            <SvgoLogo class="icon-logo"></SvgoLogo>
        </a>
        <nav>
            <ul>
                <li collapse>
                    <a href="/">Platforms</a>
                    <SvgoArrowUp></SvgoArrowUp>
                </li>
                <li collapse>
                    <a href="/">How it works</a>
                    <SvgoArrowUp></SvgoArrowUp>
                </li>
                <li collapse>
                    <a href="/">Partners</a>
                    <SvgoArrowUp></SvgoArrowUp>
                </li>
                <li collapse>
                    <a href="/">Pricing</a>
                    <SvgoArrowUp></SvgoArrowUp>
                </li>
                <li>
                    <a href="/">Resources</a>
                </li>
                <li>
                    <a href="/">about</a>
                </li>
            </ul>
            <section>
                <span class="btn">sign In</span>
                <span light class="btn">Get Started</span>
            </section>
        </nav>
    </header>
</template>
<script setup>


</script>
<style scoped lang="less">
header {
    height: 80px;
    padding: 0 15px;
    display: flex;
    align-items: center;

    nav {
        display: flex;
        flex: 1;
        justify-content: space-between;

        ul {
            list-style: none;
            display: flex;
            padding: 0 20px;


            li {
                margin: 0 15px;
                cursor: pointer;
                transition: .3s;
                padding-bottom: 10px;
                border-bottom: 2px solid transparent;

                a {
                    text-decoration: none;
                    color: #000;
                }

                svg {
                    transition: .3s;
                    transform: rotate(180deg);
                    margin-left: 7px;
                }

                &:hover {
                    border-bottom-color: rgba(21, 21, 88, 0.708);
                }

            }
        }

        .btn {
            padding: 10px;
            cursor: pointer;

            &[light] {
                border-radius: 20px;
                color: #fff;
                background-color: #3800a2;
                transition: .3s;

                &:hover {
                    color: #beb7b7;
                    background-color: #1f054e;
                }
            }

            &:not(:nth-of-type(1)) {
                margin-left: 10px;
            }
        }
    }

}

.icon-logo {
    width: 142px;
    height: 80px;

    :deep(g) {
        g:nth-child(2) {
            fill: #25F5CE;

            & * {
                fill: #25F5CE;
            }
        }
    }
}
</style>