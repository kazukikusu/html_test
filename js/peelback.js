import './peelback/jquery.peelback.js';

$(function() {
    $('#mekuri').peelback({
        adImage: './image/mekuri.png', //下に隠す画像
        peelImage  : './image/peel-image.png', //めくる画像
        clickURL: 'https://www.google.com/?hl=ja', //クリック時のリンク先
        smallSize: 60, //最小サイズ
        bigSize: 220, //最大サイズ
        autoAnimate: true //自動アニメーション
    });
});