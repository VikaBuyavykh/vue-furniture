const filters = [
  {
    filter: 'Product type',
    type: 'checkbox',
    name: 'type',
    values: ['Furniture', 'Homeware', 'Sofas', 'Homeware2', 'Light fittings', 'Accessories']
  },
  {
    filter: 'Price',
    type: 'radio',
    name: 'price',
    values: ['0 - 100', '101 - 250', '250 +']
  },
  {
    filter: 'Designer',
    type: 'checkbox',
    name: 'designer',
    values: ['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke']
  }
]

export default filters
