
function getUttarakhandDistricts() {
    return new Promise((resolve) => {
        const districts = [
            "Dehradun",
            "Haridwar",
            "Pauri Garhwal",
            "Tehri Garhwal",
            "Chamoli",
            "Rudraprayag",
            "Uttarkashi",
            "Almora",
            "Bageshwar",
            "Pithoragarh",
            "Champawat",
            "Nainital",
            "Udham Singh Nagar"
        ];
        resolve(districts);
    });
}

