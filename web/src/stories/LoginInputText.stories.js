// LoginText.stories.js
import LoginText from '../ComponentText/LoginText.vue';
import Rectangle18GrayRadius from '../ComponentText/Rectangle18GrayRadius.vue';
import Rectangle56Radius from '../ComponentText/Rectangle56Radius.vue';
import Rectangle33Radius from '../ComponentText/Rectangle33Radius.vue';

//コンポーネントの設定
export default {
    title: 'InputTextVariation',
    component: LoginText,
    component: Rectangle18GrayRadius,
    component: Rectangle56Radius,
    component: Rectangle33Radius
};
//ストーリーの追加
export const Logininputtext = () => ({
    components: { LoginText },
    template: '<LoginText />'
});

export const Rectangle18grayradius = () => ({
    components: { Rectangle18GrayRadius },
    template: '<Rectangle18GrayRadius />'
});

export const Rectangle56radius = () => ({
    components: { Rectangle56Radius },
    template: '<Rectangle56Radius />'
});

export const Rectangle33radius = () => ({
    components: { Rectangle33Radius },
    template: '<Rectangle33Radius />'
})