<template>
    <h1>Choose Your NitroPack Plan</h1>
    <h2>Upgrade, downgrade or cancel your plan at any time.</h2>
    <h2> No contract and full 14-day Money Back Guarantee.</h2>
    <section class="pricing-plans">
        <div class="choose-type">
            <span bold cursor-pointer :class="['sw-item', { selected: switchWord === 'month' }]"
                @click="switchClick">Monthly</span>
            <div :class="[
                'switch',
                {
                    month: switchWord === 'month',
                    year: switchWord === 'year',
                }
            ]" @click="switchClick">
            </div>
            <span bold cursor-pointer :class="['sw-item', { selected: switchWord === 'year' }]"
                @click="switchClick">Yearly</span>
            <SvgoToggleArrowDark class="svg-toggle"></SvgoToggleArrowDark>
            <div class="desc">
                <p bold>Annual discount enabled!</p>
                <p>You're getting 2 months free.</p>
            </div>

        </div>

        <section class="card-wrap">
            <div class="card">
                <p bold class="title">Bussiness</p>
                <div class="title-desc">
                    <p>Annual prepay +</p>
                    <p>ESAPPLICATION coupon</p>
                    <p>discount applied.</p>
                </div>
                <p class="price">
                    $16.63/mo
                </p>
                <p class="price-desc">
                    You're saving
                    <span bold>$39.84</span>
                    for the first year!
                </p>
                <div cursor-pointer class="btn">
                    Get Started
                </div>
                <ul class="info">
                    <li>
                        <strong>1 website</strong>
                    </li>
                    <li>
                        <strong>50,000/mo </strong>
                        pageviews
                    </li>
                    <li>
                        <strong>
                            25GB/mo
                        </strong>
                        CDN bandwidth
                    </li>
                    <li>
                        <strong>
                            1
                        </strong>
                        team member
                        <svgoInfo cursor-pointer></svgoInfo>
                    </li>
                </ul>

            </div>
            <div recommend class="card">
                <p bold class="title">Growth</p>
                <div class="title-desc">
                    <p>Annual prepay +</p>
                    <p>ESAPPLICATION coupon</p>
                    <p>discount applied.</p>
                </div>
                <p class="price">
                    $40.38/mo
                </p>
                <p class="price-desc">
                    You're saving
                    <span bold>$96.84</span>
                    for the first year!
                </p>
                <div cursor-pointer class="btn">
                    Get Started
                </div>
                <ul class="info">
                    <li>
                        <strong>1 website</strong>
                    </li>
                    <li>
                        <strong>200,000/mo </strong>
                        pageviews
                    </li>
                    <li>
                        <strong>
                            100GB/mo
                        </strong>
                        CDN bandwidth
                    </li>
                    <li>
                        <strong>
                            3
                        </strong>
                        team member
                        <svgoInfo cursor-pointer></svgoInfo>
                    </li>
                </ul>
                <hr>
                <p class="bottom">
                    <SvgoAdd cursor-pointer class="icon-add"></SvgoAdd>
                    <span class="text">Adaptive Image Sizing</span>
                    <span cursor-pointer class="new">New</span>
                </p>
            </div>
            <div class="card">
                <p bold class="title">Scale</p>
                <div class="title-desc">
                    <p>Annual prepay +</p>
                    <p>ESAPPLICATION coupon</p>
                    <p>discount applied.</p>
                </div>
                <p class="price">
                    $139.34/mo
                </p>
                <p class="price-desc">
                    You're saving
                    <span bold>$334.32</span>
                    for the first year!
                </p>
                <div cursor-pointer class="btn">
                    Get Started
                </div>
                <ul class="info">
                    <li>
                        <strong>1 website</strong>
                    </li>
                    <li>
                        <strong>1000,000/mo </strong>
                        pageviews
                    </li>
                    <li>
                        <strong>
                            500GB/mo
                        </strong>
                        CDN bandwidth
                    </li>
                    <li>
                        <strong>
                            10
                        </strong>
                        team member
                        <svgoInfo cursor-pointer></svgoInfo>
                    </li>
                </ul>
                <hr>
                <section class="bottom">
                    <div>
                        <SvgoAdd cursor-pointer class="icon-add"></SvgoAdd>
                        <span class="text">Adaptive Image Sizing</span>
                        <span cursor-pointer class="new">New</span>
                    </div>
                    <div>
                        <SvgoAdd cursor-pointer class="icon-add"></SvgoAdd>
                        <span class="text">Font Subsetting</span>
                        <span cursor-pointer class="new">New</span>
                    </div>
                </section>
            </div>
            <div class="card card-more">
                <p bold class="title">Custom</p>
                <div class="contact">
                    <p class="contact-title">
                        Contace us
                    </p>
                    <p class="contact-explain">
                        Need a custom plan
                        <br>
                        Contact us and we'll arrange it for you.
                    </p>
                </div>
                <div cursor-pointer class="btn">
                    Request a demo
                </div>
                <ul class="info">
                    <li>
                        Multiple Websites
                    </li>
                    <li>
                        Custom Resources Usage
                    </li>
                    <li>
                        Premium Support
                    </li>
                    <li>
                        Guided Technical Onboarding
                    </li>
                    <li>
                        Enterprise product features
                    </li>
                    <li>
                        Unlimited team members
                        <svgoInfo cursor-pointer></svgoInfo>
                    </li>
                </ul>
            </div>
        </section>
    </section>
    <p class="quicksand">
        or check us in action with
        <span cursor-pointer>Free Plan</span>
    </p>
    <section clear-float class="funky-box">
        <SvgoMoneyBackGuarantee></SvgoMoneyBackGuarantee>
        <div class="text">
            <p>14 day money-back</p>
            <p>guarantee</p>
        </div>
        <ul>
            <li>
                <SvgoCheckmarkDark></SvgoCheckmarkDark>
                Easily upgrade or downgrade
            </li>
            <li>
                <SvgoCheckmarkDark></SvgoCheckmarkDark>
                No fixed term contracts
            </li>
            <li>
                <SvgoCheckmarkDark></SvgoCheckmarkDark>
                2 months free if paid yearly
            </li>
            <li>
                <SvgoCheckmarkDark></SvgoCheckmarkDark>
                Instant prorated refunds
            </li>
        </ul>
    </section>
    <section id="see-all-NitroPack-features" class="all-features">
        <h1 class="title">All NitroPack plans include</h1>
        <ul clear-float>
            <li clear-float>
                <div class="left">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    All-in-one automated performance optimization
                </div>
                <div class="right">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    Advanced Caching Mechanism
                </div>
            </li>
            <li clear-float>
                <div class="left">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    Fast and easy setup, less than 5 minutes
                </div>
                <div class="right">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    Complete Image Optimization Stack
                </div>
            </li>
            <li clear-float>
                <div class="left">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    14-day money back guarantee
                </div>
                <div class="right">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    Built-in global CDN
                </div>
            </li>
            <li clear-float>
                <div class="left">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    Expert support team
                </div>
                <div class="right">
                    <SvgoTickmarkSecondary></SvgoTickmarkSecondary>
                    World-class proprietary speed algorithm
                </div>
            </li>
        </ul>
        <a class="bottom" href="#see-all-NitroPack-features">see all NitroPack features</a>
    </section>

    <section class="mega">
        <h1>NitroPack speeds up 193,000+ websites every day.</h1>
        <p>Including</p>
    </section>
    <section class="logos">
        <div class="l-1">
            <SvgoVoicesLogo></SvgoVoicesLogo>
            <SvgoDevrixLogo></SvgoDevrixLogo>
            <SvgoWaterfrontDigitalLogo></SvgoWaterfrontDigitalLogo>
        </div>
        <div class="l-2">
            <SvgoSmartbloggerLogo></SvgoSmartbloggerLogo>
            <SvgoPartnerizeLogo></SvgoPartnerizeLogo>
            <SvgoArageekLogo></SvgoArageekLogo>
        </div>
    </section>
    <section class="faq">
        <p bold>FAQs</p>
        <p bold>Using NitroPack is easy.</p>
        <ul>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <SvgoArrowDown></SvgoArrowDown>
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
            <li>
                <div clear-float class="question">
                    <p>Do I need to have coding skills to use NitroPack? </p>
                    <!-- icon -->
                </div>
                <div class="answer">
                    No. With our connectors for WordPress, OpenCart, WooCommerce, and Magento, anyone can use NitroPack
                    regardless of their tech skills. Learn
                    <strong class="color"> all you need to know about the NitroPack plans</strong>
                    and speed up your site on autopilot.
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>
let switchWord = ref('month')

const switchClick = () => {
    if (switchWord.value === 'month') switchWord.value = 'year'
    else switchWord.value = 'month'
}

</script>

<style lang="less" scoped>
h1 {
    color: #1b004e;
    text-align: center;
    font-size: 50px;
    margin-bottom: 30px;
}

h2 {
    color: #1b004e;
    text-align: center;
    font-weight: normal;
}

.pricing-plans {
    margin-top: 80px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .switch {
        display: inline-block;
        height: 40px;
        background-color: #1b004e;
        vertical-align: middle;
        border-radius: 30px;
        margin: 0 10px;
        position: relative;
        padding: 0 5px;
        width: 90px;
        cursor: pointer;

        &::before {
            content: '';
            width: 30px;
            display: block;
            height: 30px;
            background: #fff;
            position: absolute;
            top: 50%;
            transition: 0.3s;
            transform: translate(0, -50%);
            border-radius: 50%;
        }

        &.month::before {
            transform: translate(0, -50%);
        }

        &.year::before {
            transform: translate(50px, -50%);
        }
    }
}

.sw-item {
    opacity: .5;
}

.choose-type {
    color: #1B004E;
    margin-bottom: 60px;

    .selected {
        color: #1b004e;
        opacity: 1;
    }
}

.svg-toggle {
    width: 102px;
    height: 28px;
    position: relative;
    top: -30px;
}

.desc {
    color: #1b004e;
    display: inline-block;
    vertical-align: bottom;
}

hr {
    margin: 8px 0;
}

.card-wrap {
    width: 100%;

    .card {
        max-width: 25%;
        position: relative;
        height: 700px;
        border-radius: 25px 0px 0px 25px;
        border: 1px solid rgba(0, 0, 0, 0.125);
        box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.01);
        padding: 56px 16px 16px;
        float: left;
        color: #1b004e;

        .title {
            font-size: 32px;
            margin-bottom: 30px;
        }

        .title-desc {
            background-color: #a8fbeb;
            border-radius: 7px;
            padding: 10px;
            // color: #1b004e;
            font-size: 16px;
            line-height: 24px;
        }

        .price {
            margin: 30px 0;
            font-size: 25px;
            font-weight: bold;
        }

        .price-desc {
            font-size: 16px;
            color: #1b004e99;
            font-weight: 400;
            line-height: 24px;

            span {
                color: #1b004e;
            }
        }

        .btn {
            background-color: #3800a2;
            border-radius: 29px;
            padding: 8px 48px;
            color: #fff;
            margin: 30px 0;
            text-align: center;
            display: inline-block;
        }

        .info {
            list-style: none;
            line-height: 32px;

            .nuxt-icon {
                font-size: 20px;
            }
        }

    }

    .card:not(:nth-child(1)) {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .card:nth-last-child(1) {
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .card[recommend]::before {
        content: 'NitroPack recommmends';
        top: 0;
        position: absolute;
        background-color: #25f5ce;
        line-height: 40px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 16px;
    }



}

.bottom {
    .text {
        margin: 0 6px;
    }

    .new {
        background-color: #25f5ce;
        font-size: 10px;
        padding: 2px 4px;
    }
}

.icon-add {
    font-size: 18px;

    :deep(path) {
        fill: revert-layer;
    }

    :deep(path:nth-child(1)) {
        fill: #3800a2;
    }
}

.card-more {
    background-color: #1b004e;
    color: #fff !important;

    .btn {
        border: 1px solid #fff;
        margin: 40px 0 !important;
        background-color: transparent !important;
    }

    .title {
        margin-bottom: 43px;
    }

    .contact {
        margin-bottom: 40px;

        &-title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        &-explain {
            line-height: 24px;
            padding-right: 89px;
        }
    }
}

.quicksand {
    margin: 59px 0;
    font-size: 20px;
    text-align: center;

    span {
        color: #3800a2;
    }
}

.funky-box {
    background-color: #d0fdf5;
    border-radius: 30px 0;
    padding: 16px 16px 48px;

    .nuxt-icon {
        width: 228px;
        height: 209px;
        fill: revert-layer;
        float: left;
    }

    :deep(.nuxt-icon *) {
        fill: revert-layer;
    }

    .text {
        height: 211px;
        float: left;
        font-size: 40px;
        font-weight: bold;
        color: #1b004e;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 84px 0 32px;

    }

    ul {
        float: left;
        list-style: none;
        margin-top: 28px;

        .nuxt-icon {
            width: 24px;
            height: 19px;
            margin-right: 20px;
        }

        li {
            margin-bottom: 20px;
            color: #1b004e;
        }
    }
}

.all-features {
    margin-top: 90px;
    background-color: #1b004e;
    color: #fff;
    overflow: hidden;
    margin-bottom: 93px;
    position: relative;
    padding-bottom: 176px;

    .title {
        color: #fff;
        margin-top: 100px;
    }

    ul {
        padding: 0px 30px;
        list-style: none;

        li {
            width: 100%;
            font-size: 22px;
            margin-bottom: 35px;
            padding-left: 15px;

            .right {
                margin-left: 20px;
                width: calc(50% - 20px);
            }

            .left {
                width: 50%;
            }

            div {
                float: left;
                display: flex;
            }

            .nuxt-icon {
                width: 44px;
                height: 25px;
                position: relative;
                top: 5px;
                margin-right: 10px;
            }
        }
    }

    .bottom {
        font-size: 22px;
        color: #25f5ce !important;
        text-decoration: none;
        position: absolute;
        bottom: 97px;
        left: 50%;
        transform: translateX(-50%);

        &:hover {
            text-decoration: underline;
            opacity: .6;
        }
    }
}

.mega {
    h1 {
        margin: 0 auto;
        max-width: 903px;
    }

    p {
        text-align: center;
        margin-top: 30px;
        font-size: 20px;
        color: #1b004e;
        margin-bottom: 78px;
    }
}

.logos {
    .l-1 {
        text-align: center;
        margin-bottom: 30px;
    }

    .l-2 {

        text-align: center;
    }

    .nuxt-icon {
        margin-right: 50px;
    }

    .nuxt-icon:nth-of-type(1) {
        width: 211.71px;
        height: 46.39px;
    }

    .nuxt-icon:nth-of-type(2) {
        width: 211.73px;
        height: 83.6px;
    }

    .nuxt-icon:nth-of-type(3) {
        width: 211.73px;
        height: 88.03px;
    }

    .nuxt-icon:nth-of-type(4) {
        width: 211.71px;
        height: 84.39px;
    }

    .nuxt-icon:nth-of-type(5) {
        width: 211.71px;
        height: 33.39px;
    }

    .nuxt-icon:nth-of-type(6) {
        width: 211.71px;
        height: 36.39px;
    }

    .nuxt-icon:nth-of-type(7) {
        width: 211.71px;
        height: 68.39px;
    }
}

.faq {
    background-color: #c4fdf3;
    margin: 48px 15px;
    border-radius: 30px 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    >p:nth-of-type(1) {
        color: #3800a2;
        margin-top: 110px;
    }

    >p:nth-of-type(2) {
        font-size: 52px;
        color: #1b004e;
        max-width: 560px;
        text-align: center;
    }

    ul {
        margin-top: 10px;
        list-style: none;

        li {
            padding: 15px 0;

            .question {
                font-size: 22px;
                color: #212529;
                position: relative;

                p {
                    float: left;
                    width: 514px;
                    padding-right: 20px;
                    letter-spacing: 1px;
                }

                .nuxt-icon {
                    float: left;
                    color: #8C7FA6;
                    cursor: pointer;
                    position: absolute;
                    bottom: 0;
                }
            }

            .answer {
                display: none;
            }

            &:not(:nth-of-type(1)) {
                border-top: 2px solid #25F5CE;
            }
        }
    }
}
</style>
  