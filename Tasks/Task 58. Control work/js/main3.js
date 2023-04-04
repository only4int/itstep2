function getUniqueParams(...params){ //params - это больная фантазия разработчика, как хочу нызвать переменную, так и называю

    //arguments
    //...params - sprad-оператор говорит о том, что все параметры функции которые не описаны - будут помещаться в params (массив)

    params = params.filter((item, index, array) => array.indexOf(item) == index);
    return params;
}

console.log(getUniqueParams(1,2,3,5,6,8,3,6,4,3));


