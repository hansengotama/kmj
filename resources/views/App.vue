<template>
    <div style="width: 100%; height: 100%;">
        <router-view></router-view>
    </div>
</template>

<style lang="stylus">
    .pointer
        cursor pointer

    .table-title
        background rgb(62, 149, 169)
        width 98%
        color white
        top 30px
        font-weight lighter
        position absolute
        left 1%
        right 1%
        border-radius 3px
        box-shadow 0 12px 20px -10px rgba(62, 149, 169, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(62, 149, 169, .2)

    .content-container
        width 100%
        background white
        box-shadow 0 1px 4px 0 rgba(0,0,0,.14)
        padding-top 80px
        padding-bottom 20px

    .content-place
        padding-left 1%
        padding-right 1%

    .additional-container
        display flex
        justify-content space-between
        align-items center

    .add-button > button
        padding 8px 14px
        color white
        background rgb(62, 149, 169)
        border-radius 4px
        box-shadow 0 12px 20px -10px rgba(62, 149, 169, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(62, 149, 169, .2)
        cursor pointer

    .search-bar
        display flex

    .search-bar > input
        padding 8px 14px
        border-radius 4px
        border 1px solid #eaeaea
        border-bottom-right-radius 0
        border-top-right-radius 0
        border-right none
        width 150px

    .search-bar > i
        padding 6px
        border 1px solid #eaeaea
        border-left none
        border-radius 4px
        border-top-left-radius 0
        border-bottom-left-radius 0

    .table-container
        margin-top 20px
        font-weight lighter !important
        width 100%

    .table-container > table
        width 100%
        padding-bottom 20px

    table > tr > th,
    table > tr > td
        font-weight lighter !important

    table > tr > th
        color rgb(62, 149, 169)
        text-align left
        padding-bottom 10px

    table > tr > td
        padding-top 12px
        padding-bottom 12px
        border-top 1px solid #eaeaea
        font-size 14px

    .fa-edit
        padding 8px
        background #3e95a9
        color white
        border-radius 3px
        box-shadow 0 12px 20px -10px rgba(62,149,169,0.28), 0 4px 20px 0 rgba(0,0,0,0.12), 0 7px 8px -5px rgba(62,149,169,0.2)
        cursor pointer

    .fa-trash
        padding 8px
        background red
        color white
        border-radius 3px
        box-shadow 0 12px 20px -10px rgba(62,149,169,0.28), 0 4px 20px 0 rgba(0,0,0,0.12), 0 7px 8px -5px rgba(62,149,169,0.2)
        cursor pointer

    .fa-arrow-left
        padding 8px
        border-radius 50%
        border 1px solid black
        cursor pointer
        margin-right 5px

    .form-custom-container
        display flex
        align-items start
        margin-bottom 10px

    .form-custom-title
        flex 1

    .form-custom-input
        flex 1
        width 100%

    .form-custom-input > input
        padding 8px 12px
        width 80%
        color #757575
        background white
        border 1px solid #cccccc

    .form-custom-input > select
        width 83%
        height 38px
        color #757575
        background white
        border 1px solid #cccccc
        min-width 131px

    .submit-container
        width 100%

    .submit-container > button
        background #3e95a9
        color white
        padding 8px 15px
        border-radius 3px
        cursor pointer

    .red-text
        color red

    .error-text
        color red
        margin-top 5px
        font-size 12px

    .error-input
        border 1px solid red
</style>
