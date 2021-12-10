// Api variable
const api_Url = "https://pixabay.com/api";
const api_key = "8761127-15c354fd40a23de8d36bfe25d";
const amount = 4;


// dynamic id's
let HI = document.querySelector("#hi");
let vi = document.querySelector("#var-img");

// input id
let form = document.querySelector('#form');
let typeText = document.querySelector('#in');
form.addEventListener('submit',(e) => {
  // type = typeText.value;
  apiCall(typeText.value,typeText.value);
  typeText.value="";
  // console.log(type)
  e.preventDefault();
})



// call api

const apiCall = async (type = 'rose',altText = 'rose') => {
  try {
    let apiURL = `${api_Url}/?key=${api_key}&q=${type}&image_type=photo&per_pare=${amount}&safesearch=true`
    let response = await fetch(apiURL);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    document.querySelector('.images').innerHTML = '';
    for(let dt in data.hits){
      // console.log(data.hits[dt].largeImageURL);
      let imgTag = document.createElement('img');
      imgTag.src = data.hits[dt].largeImageURL;
      imgTag.alt = altText;
      imgTag.className='image'
      imgTag.onclick = () => {
        HI.style.display = "grid";
        vi.src = data.hits[dt].largeImageURL;
        vi.alt = altText;
      }
      document.querySelector('.images').appendChild(imgTag);  
    }
    // console.log(data.hits);
  } catch (error) {
    console.error(error.message);
  }
}

apiCall();

const showImg = (imgsrc) => {
  HI.style.display = "grid";
  vi.src = imgsrc;
};

const hideImg = () => {
  HI.style.display = "none";
};
