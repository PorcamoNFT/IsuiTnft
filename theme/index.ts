import { extendTheme, theme as base, withDefaultColorScheme } from "@chakra-ui/react";

const inputSelectStyles = {

}

const theme = extendTheme ({
    colors: {
        brand: {
            50: '#9f8559',
            100: '#9f8559',
            200: '#9f8559',
            300: '#9f8559',
            400: '#9f8559',
            500: '#9f8559',
            600: '#9f8559',
            700: '#9f8559',
            800: '#9f8559',
            900: '#9f8559',

        },

    },
fonts: {
    Headers: 'Montserrat',
    p: 'Montserrat',
    Text: 'Montserrat',
},


compontents: {
    Input: { ...inputSelectStyles },
        variants: {
            filled: {
                field: {
                    _focus: {
                        borderColor: 'brand.500',
                    },
                },

            },


        },
        sizes: {
            md: {
                field: {
                    borderRadius: 'none'
                },
            },
        },


    },

},



withDefaultColorScheme ({
    colorScheme: 'brand',
    components: ['Checkbox']


})

) ;

export default theme;