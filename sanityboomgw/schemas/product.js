export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: "ref",
        title: "References",
        type: "boolean",
      },
      {
        name: "refFeatures",
        title: "Features References",
        type: "string",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      },
      {
        name: "popular",
        title: "Popular",
        type: "boolean",
      }
    ]
  }