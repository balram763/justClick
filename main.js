const Api_Key = 'e89dRvzVTtuodqkit9qeK4MC'
let urlDownload;

const handleSubmit  = async(Api_Key) => {
    const inputFile = document.getElementById('pic') 
    const Picture = inputFile.files[0]
    // console.log(Picture)  
    console.log(`clicked`)
    
    const formData = new FormData()
    formData.append('image_file',Picture)
    formData.append('size','auto')

    const responce = await fetch('https://api.remove.bg/v1.0/removebg',{
        method : 'POST',
        headers : { "X-Api-Key": '7pwLTep7GznBsyLQ7VCJBzz9' },
        body : formData
    })
    // const blob = responce.blob()
    .then(function(response){
        return response.blob()
    })
    .then(function(blob){
        const url = URL.createObjectURL(blob)
        console.log(url)
        const imageoutput = document.getElementById('imageoutput')
        imageoutput.src = url;
        urlDownload = url
    }).catch()

    const ui = document.getElementById('ui')
    ui.className = 'card p-2 shadow'

}


const downloadimage = function(){

    const a = document.createElement('a')
    a.href = urlDownload
    console.log(urlDownload)
    a.download = 'download.png'
    document.body.append(a)
    a.click()
    document.body.removeChild(a)
}
