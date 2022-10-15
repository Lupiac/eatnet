import { isPlatform } from "@ionic/react";

const Utils = {
// helper function: generate a new file from base64 String
  dataURLtoFile: (dataurl:any ) => {
    console.log("dataurl: ",dataurl);
    const arr = dataurl.split(',')
    const matched = arr[0].match(/:(.*?);/)
    const mime = matched?matched[1]:'';
    const bstr = isPlatform('hybrid')?atob(dataurl):atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n) {
      u8arr[n - 1] = bstr.charCodeAt(n - 1)
      n -= 1 // to make eslint happy
    }
    return new File([u8arr], 'image', {
      type: 'image/jpeg'
    })
  }
}
export default Utils;