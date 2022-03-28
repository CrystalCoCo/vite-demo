export async function validateMobile(rule, value) {
    if(value && !(/^1[34578]\d{9}$/.test(value))) {
        return Promise.reject('请输入正确的手机号码')
    } else return Promise.resolve()
}

const checkTel = async(rule, value) => {
    if(value &&!(/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,4}))?$/.test(value))) {
        return Promise.reject('请输入正确的电话号码')
    } else return Promise.resolve()
}                

export async function validateIdCards(rule, value) {
    let reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    if(reg.test(value)) return Promise.resolve()
    else return Promise.reject('请输入正确的身份证号码')
}

export  {
    checkTel
}
