import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

type PasswordMeterProps = {
  password: string;
};

type StrengthStateProps = {
  weak: boolean;
  medium: boolean;
  strong: boolean;
};

type StrengthColorProps = {
  weak: string;
  medium: string;
  strong: string;
};

const strengthColor: StrengthColorProps = {
  weak: 'bg-danger',
  medium: 'bg-warning',
  strong: 'bg-success',
};

export function PasswordMeter({ password }: PasswordMeterProps) {
  const [strengthState, setStrengthState] = useState<StrengthStateProps>({
    weak: false,
    medium: false,
    strong: false,
  });

  useEffect(() => {
    const minLength = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const symbol = /[@$!%*?&]/.test(password);

    const strengthCount = [minLength, uppercase, lowercase, symbol].filter(
      Boolean
    ).length;

    setStrengthState({
      weak: strengthCount >= 1,
      medium: strengthCount >= 3,
      strong: strengthCount >= 4,
    });
  }, [password]);

  //   const currentStrength = useMemo(() => {
  //     let lastTrueKey = null;

  //     for (const [key, value] of Object.entries(strengthState)) {
  //       if (value) {
  //         lastTrueKey = key;
  //       }
  //     }
  //     return lastTrueKey;
  //   }, [strengthState]);

  return (
    <Container>
      <Row className="password-meter">
        {Object.keys(strengthState).map((strength: string) => (
          <Col
            key={strength}
            className={`meter-section mx-1  ${strengthState[strength as keyof StrengthStateProps] ? strengthColor[strength as keyof StrengthColorProps] : ' bg-body-secondary'}`}></Col>
        ))}
        {/* <Col>
            <div id="passwordHelp" className="form-text text-muted">
              {currentStrength}
            </div>
          </Col> */}
      </Row>
    </Container>
  );
}
