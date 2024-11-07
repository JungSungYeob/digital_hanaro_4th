const introduce4 = (name: string, height = 0) => {
    console.log(name);
    console.log(height);

    // height = undefined // 타입 에러(NaN은 가능)
};

introduce4("티니핑"); //OK
introduce4("티니핑", undefined); //OK
introduce4("티니핑", 170); //OK

// introduce4('티니핑', '하츄핑') //에러(타입 에러)
