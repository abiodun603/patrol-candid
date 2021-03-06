import styled from 'styled-components'

export const LoginWrapper = styled.div `
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
`

export const LoginBanner = styled.div `
    position: relative;
    width: 50%;
    height: 100%;
    background-color: red;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        object-fit: cover;
    }

    @media screen and (max-width: 768px){
        width: 20%;
    }

    @media screen and (max-width: 368px){
        display: none;
    }
`

export const FormWrapper = styled.form `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column; 
    width: 50%;
    height: 100%;

    .header{
        padding-left: 1rem;
        margin-top: 2rem;
        margin-bottom: var(--mb-2);
        display: flex;
        align-items: center;

        h2{
            text-align: left !important;
            font-size: 18px;
            font-weight: 500;
            margin-left: 5px;
            color: var(--kBlack);
        }
    }

    

    @media screen and (max-width: 768px){
        width: 100%;
    }

`

export const FormWrapper2 = styled.form `
    display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column; 

    span{
        // line-height: 36px;
        // font-size: 1rem;
        // display: inline-block; 
        // letter-spacing: 1px;
        // font-size: 300;

        line-height: 36px;
        font-size: 1rem;
        display: inline-block; 
        letter-spacing: 1px;
        font-weight: 600;

    }
`

export const LoginForm = styled.div `
	width:65%;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;

	h2{
		text-align: left !important;
		margin-bottom: var(--mb-2);
        font-size: 18px;
		// &:after{
		// 	content: "";
		// 	display: block;
		// 	width: 75px;
		// 	height: 5px;
		// 	background: var(--kBlue);
		// 	margin-top: 5px;
		// }
	}

    h3{
        font-size: 18px;
        color: var(--kBlue);
    }

    p{
        font-size: 15px;
        margin-bottom: 1.5rem;
    }

	@media screen and (max-width: 768px){
		width: 100%;
		padding: 0 1rem
	}
`

export const FromBx = styled.div `
    width: 100%;
    margin-bottom: .8rem;
    display: flex;
    flex-direction: column;



    span{
        // line-height: 36px;
        // font-size: 1rem;
        // display: inline-block; 
        // letter-spacing: 1px;
        // font-size: 300;

        line-height: 36px;
        font-size: 1rem;
        display: inline-block; 
        letter-spacing: 1px;
        font-weight: 500;

    }

    label{
        display: flex;
    }
`
export const Input = styled.input.attrs(props => ({
    type: 'text',

})) `
    // width: 100%;
    // border-radius: 10px;
    // padding: 10px 20px;
    // background: var(--kLightGrey);
    // border: 2px solid #D0D0D0;
    // outline: none;
    // font-weight: 400;
    // letter-spacing: 1px;
    // background: transparent;

    width: 100%;
    border-radius: 4px;
    padding: 15px 20px;
    outline: none;
    font-weight: 400;
    letter-spacing: 1px;
    background: #f5f6fa;
`

export const InputDate = styled.input.attrs(props => ({
    type: 'date',

})) `
    // width: 100%;
    // border-radius: 10px;
    // padding: 10px 20px;
    // background: var(--kLightGrey);
    // border: 2px solid #D0D0D0;
    // outline: none;
    // font-weight: 400;
    // letter-spacing: 1px;
    // background: transparent;

    width: 100%;
    border-radius: 4px;
    padding: 15px 20px;
    outline: none;
    font-weight: 400;
    letter-spacing: 1px;
    background: #f5f6fa;
`

export const InputCheck = styled.input.attrs(props => ({
    type: "checkbox"
}))` `

export const FromBxRem = styled.div `
    margin-top: 1.5rem;
`
export const Button = styled.button `
    width: 100%;
    border: none;
    padding: 14px 20px;
    color: var(--kWhite);
    cursor: pointer;
    border-radius: 4px; 
    background: var(--kBlue);
    letter-spacing: 1px;
    // text-transform: uppercase;
    font-weight: 600;
    margin-top: 2.5rem;
`