window.addEventListener('load', () => {
	let long;
    let lat;
    
    let temparatureDegree = document.querySelector('.temparature-degree');
    let temparatureDescription = document.querySelector('.temparature-description');
    let locationTimezone = document.querySelector('.location-timezone')
    let temparatureSection = document.querySelector('.temparature-section');
    let temparatureSpan = document.querySelector('.temparature span');
    
    
    
    if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			long = position.coords.longitude;
            lat = position.coords.latitude;
            

            
			const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/625c6683e0a43f54abeb5ad2651b97ec/${lat},${long}`;
			fetch(api)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
                    const {temparature, summary, icon} = data.currently;
                    //set DOM elements from the API
                    temparatureDegree.textContent = temparature;
                    temparatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    //formulae for celcius
                    let celcius = (temparature - 32) * (5/9);
                    
                    
                    
                    //set icon
                     setIcons(icon, document.querySelector('.icon'));
                     //change temp to F/C
                     temparatureSection.addEventListener('click', (()=> {
                         if(temparatureSpan.textContent === 'F')
                         {
                             temparatureSpan.textContent = 'C';
                             temparatureDegree.textContent = Math.floor(celcius);
                         
                            } else
                         {
                             temparatureSpan.textContent = 'F';
                     }
                     })

                )});
		});
	}
});

function setIcons(icon, iconID){
    const skycons = new Skycons({color: 'white'});
    const currentIcon = icon.replace(/-/g, '_').toUpperCase();
    skycons.play();
    return skycons.set(iconID, skycons[currentIcon]);
}
