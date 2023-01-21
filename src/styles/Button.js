import styled from '@emotion/styled'

const Button = styled.a({
    cursor: 'pointer',
    padding: '6px 12px',
    color: '#573EDE !important',
    backgroundColor: 'white',
    borderRadius: '5px',
    fontSize: '16px',
    fontFamily: fonts.semibold,
    border: '1px solid #573EDE',
    transition: 'all 300ms ease',
    ':hover': {
        transition: 'all 300ms ease',
        color: 'white !important',
        backgroundImage:
            'linear-gradient(180deg, #4A60DE 0%, #2F43C2 100%) !important',
        border: '1px solid #573EDE',
    },
})