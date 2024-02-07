import React from 'react';
import styled from 'styled-components';

function Form() {
	return (
		<FormLayout>
			<FormContainer>
				<FormInputWrapper>
					<label>닉네임</label>
					<input type="text" placeholder="닉네임을 적어보세요" maxLength={10} name="nickname"></input>
				</FormInputWrapper>
				<FormInputWrapper>
					<label>내용</label>
					<textarea type="text" placeholder="최대 190자 이내로 적어주세요" maxLength={190} name="content"></textarea>
				</FormInputWrapper>
				<FormSelectWrapper>
					<label>어떤 멤버에게 보낼까요?</label>
					<select name="writedTo">
						<option value={'유재석'}>유재석</option>
						<option value={'하하'}>하하</option>
						<option value={'주우재'}>주우재</option>
						<option value={'이이경'}>이이경</option>
						<option value={'박진주'}>박진주</option>
						<option value={'이미주'}>이미주</option>
					</select>
				</FormSelectWrapper>
				<BtnWrapper>
					<FormSubmitBtn type="submit">등록하기</FormSubmitBtn>
				</BtnWrapper>
			</FormContainer>
		</FormLayout>
	);
}

export default Form;

const FormLayout = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	background-color: palevioletred;
	color: #fff;
	width: 700px;
	padding: 1.7rem;
	font-family: 'BookkGothic-Bd';
	font-size: 20px;
	border-radius: 12px;
	margin: 50px 0;
	box-shadow: 5px 8px 10px gray;
`;

const FormInputWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.85rem;
	& label {
		width: 90px;
	}
	& input,
	textarea {
		width: 100%;
		padding: 15px;
		border-radius: 10px;
	}
	& textarea {
		resize: none;
		height: 100px;
	}
`;

const FormSelectWrapper = styled(FormInputWrapper)`
	justify-content: flex-start;
	& label {
		width: 220px;
	}
	& select {
		width: 150px;
		height: 30px;
		margin-left: 20px;
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const FormSubmitBtn = styled.button`
	display: flex;
	background-color: #fff;
	border-radius: 5px;
	width: 90px;
	height: 35px;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: lightskyblue;
		color: #fff;
	}
`;
