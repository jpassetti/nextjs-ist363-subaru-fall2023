const vehicles = [
    {
      "model": "Crosstrek",
      "slug": "crosstrek",
      "price": 24995
    },
    {
      "model": "Forester",
      "slug": "forester",
      "price": 27095
    },
    {
      "model": "Outback",
      "slug": "outback",
      "price": 28895
    },
    {
      "model": "Ascent",
      "slug": "ascent",
      "price": 34195
    },
    {
      "model": "Solterra",
      "slug": "solterra",
      "price": 44995
    },
    {
      "model": "Impreza",
      "slug": "impreza",
      "price": 22995
    },
    {
      "model": "Legacy",
      "slug": "legacy",
      "price": 24895
    },
    {
      "model": "BRZ",
      "slug": "brz",
      "price": 28595
    },
    {
      "model": "WRX",
      "slug": "wrx",
      "price": 30605
    }
  ];

export function getVehicleBySlug(slug) {
    const foundVehicle = vehicles.find((vehicle) => {
        // return true or false
        return vehicle.slug === slug;
    });   
    return foundVehicle;
}