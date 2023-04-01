import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId:'53uglcl8',
    dataset:'production',
    useCdn:true,
    apiVersion:"2021-10-21"
  
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

export default client;


// skOAOUy90yvaA6WIIBMCxnA5Hol3I42ohmnVMbYMl9jOnCkMpdLlZleqEuDCkzPXa3B2ML8GyfMTyFonnpFUWDrfBpq5OCBlN54EaJ6Fmh4SRETGJTgKVUYYttlYhsHLs0hM73XrY1GPfMJXOeJT5Mv16dfgtPZ2Ffpuspb3u0E5XBfTCQo0