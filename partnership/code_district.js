
getUttarakhandDistricts().then(districts => {
    const dropdown = document.getElementById("district");

    districts.forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        dropdown.appendChild(option);
    });
});
