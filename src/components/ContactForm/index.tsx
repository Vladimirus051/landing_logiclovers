import { Row, Col, Dropdown } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

import { useState } from "react";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit: formSubmit } = useForm(validate);
  const [submissionStatus, setSubmissionStatus] = useState<string>('');

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };


  return (
      <ContactContainer id={id}>
        <Row justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24} xs={24}>
            <Slide direction="left" triggerOnce>
              <Block title={title} content={content} />
            </Slide>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Slide direction="right" triggerOnce>
              <FormGroup autoComplete="off">
                <Col span={24}>
                  <Input
                      type="text"
                      name="email"
                      placeholder="Ваша почта"
                      value={values.email || ""}
                      onChange={handleChange}
                  />
                  <ValidationType type="email" />
                </Col>
                <ButtonContainer>
                  <Button onClick={()=>{alert('Пока недоступно')}} name="submit">{t("Отправить")}</Button>
                </ButtonContainer>
                {submissionStatus === 'success' && <Span style={{ color: 'green' }}>Успешная регистрация на подписку</Span>}
                {submissionStatus === 'error' && <Span style={{ color: 'red' }}>Ошибка при отправке формы (возможно, такой email уже подписан)</Span>}
              </FormGroup>
            </Slide>
          </Col>
        </Row>
      </ContactContainer>
  );
};

export default withTranslation()(Contact);
