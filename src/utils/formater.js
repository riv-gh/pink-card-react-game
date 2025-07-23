export const orDefault = (value, defValue) => {
  return value ? value : defValue
}

export const formatDate = (dateTZstring) => {
  const digits2 = (num) => {
    return ( '0' + num ).slice(-2)
  }
  dateTZstring = '2022-04-18T17:40:00Z'
  const d = new Date(dateTZstring)
  const YYYY = d.getFullYear()
  const MM = digits2(d.getMonth()+1)
  const DD = digits2(d.getDate())
  //const hh = digits2(d.getHours())
  //const mm = digits2(d.getMinutes())
  // const ss = digits2(d.getSeconds())
  // return `${DD}.${MM}.${YYYY} ${hh}:${mm}:${ss}`
  return `${DD}.${MM}.${YYYY}`
}

export const removeTags = (stringWithTags) => {
  return stringWithTags.replace(/<\/?[^>]+>/g,'')
}

export const declOfNum  = (number, titles) =>  
// title=declOfNum(N,['арбуз','арбуза','арбузов']);
// 1 арбуз
// 2 арбуза
// 12 арбузов
{  
    const cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]  
}