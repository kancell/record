import React from 'react'
import styled from 'styled-components';

const FormContain = styled.label`
   
`
const Contain = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-top: 1.5vh;`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 61.8vw;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
`

function FormTest(props) {
    return (
        <FormContain>
            <Contain>
                <Content>
                    <p>测试用表单页</p>
                    <label>标题<input/></label>
                    <label>日期<input/></label>
                    <label>内容<input/></label>
                    <button>提交</button>
                </Content>
            </Contain>

        </FormContain>
    )
}

export default FormTest