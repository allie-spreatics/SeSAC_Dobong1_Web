// 모듈만들기 export 이용
// 한 번에 내보내기

const flowers =['rose', 'sunflower', 'tulip'];

function getFlowers(idx){
    if(idx >= flowers.length || idx<0) return 'x'
    return flowers[idx];
}

// export {flowers, getFlowers}
export {flowers as flr, getFlowers as getFlr}