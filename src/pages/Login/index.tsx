import React, { useContext } from "react";
import { Button, Input, Form, Alert } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Context } from "../../contexts/AuthContext";
import { Container } from "./styles";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const Login: React.FC = () => {
  const { handleLogin, error, loading } = useContext(Context);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, touchedFields },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(async (data) => await handleLogin(data));

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <h1>Emissor de boletos Inter</h1>

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <Form.Item
              label="Email"
              validateStatus={fieldState.error && "error"}
              help={errors.email?.message}
              hasFeedback
            >
              <Input {...field} id="email" name="email" type="email" />
            </Form.Item>
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <Form.Item
              label="Senha"
              validateStatus={fieldState.error && "error"}
              help={errors.password?.message}
              hasFeedback
            >
              <Input {...field} id="password" name="password" type="password" />
            </Form.Item>
          )}
        />

        {error && (
          <Alert
            style={{ marginBottom: "26px" }}
            message={error}
            type="error"
            showIcon
          />
        )}

        <Button
          loading={loading}
          disabled={
            (!isValid && (touchedFields.email || touchedFields.password)) ||
            Boolean(errors.email) ||
            Boolean(errors.password)
          }
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Login;
