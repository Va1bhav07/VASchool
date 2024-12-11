import Offcanvas from 'react-bootstrap/Offcanvas';
import type { OffcanvasProps } from 'react-bootstrap/Offcanvas';

type MobileCourseFilterProps = OffcanvasProps & {
  children: React.ReactNode;
  mobileFilterHandler: () => void;
  showMobileFilter: boolean;
};

export function MobileCourseFilter({
  children,
  mobileFilterHandler,
  showMobileFilter,
  ...props
}: MobileCourseFilterProps) {
  return (
    <Offcanvas
      data-bs-theme="dark"
      show={showMobileFilter}
      onHide={mobileFilterHandler}
      placement="end"
      {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filter</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
}
