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

        <p class="quicksand">
            or check us in action with
            <span>Free Plan</span>
        </p>

    </section>

    <!-- <NuxtLink to="/about">about</NuxtLink>
    <el-button type="primary">Primary</el-button> -->
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
</style>
  