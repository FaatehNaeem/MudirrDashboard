'use client'

const imageLoader = ({ src, width, quality }) => {
    return `https://s3-alpha-sig.figma.com${src}?w=${width}&q=${quality || 75}`
}