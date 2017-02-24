Problem:
Cloud image services like cloudinary/imgix require dimension of image to generate urls. When we work with flex, sometimes dimensions of image can be determined only during runtime of the app. 


`CLImage` component in this repo provides a simple technique to generate urls based on well known `onLayout` callback. It works with cloudinary service, similar approach can be extended to other services.