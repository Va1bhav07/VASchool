import Card from 'react-bootstrap/Card';
import { FilterForm } from './FilterForm';
import { useEffect, useState } from 'react';
import { filterUIProps, CourseDetailsProps } from '../../../shared.types';

type CourseFiltersProps = {
  courses: CourseDetailsProps[];
};

const initialFilterUI: filterUIProps = {
  author: {
    title: 'Author',
    data: [],
    comp: 'select',
  },
  level: {
    title: 'Level',
    data: [],
    comp: 'select',
  },
  language: {
    title: 'Language',
    data: [],
    comp: 'select',
  },
};

const authors = new Set<string>();
const levels = new Set<string>();
const languages = new Set<string>();

export function CourseFilters({ courses }: CourseFiltersProps) {
  const [filterState, setFilter] = useState<filterUIProps>(initialFilterUI);
  // console.log(' authors,levels,languages :>> ', authors, levels, languages);
  const filterData = { ...filterState };

  useEffect(() => {
    function setFilterUI() {
      // const filterTypes = Object.keys(filterData)

      courses.forEach((courseDetails) => {
        if (!authors.has(courseDetails.createdBy)) {
          authors.add(courseDetails.createdBy);
          filterData.author.data.push({
            id: courseDetails.createdBy,
            name: courseDetails.author,
          });
        }
        if (!levels.has(courseDetails.level)) {
          levels.add(courseDetails.level);
          filterData.level.data.push({
            id: courseDetails.level,
            name: courseDetails.level,
          });
        }
        if (!languages.has(courseDetails.language)) {
          languages.add(courseDetails.language);
          filterData.language.data.push({
            id: courseDetails.language,
            name: courseDetails.language,
          });
        }
      });
      return filterData;
    }
    const getFilterMenuData = setFilterUI();
    setFilter(getFilterMenuData);
  }, [courses]);

  return (
    <Card border="0" className="shadow bg-body-tertiary position-sticky top-0">
      <Card.Header>
        <h5 className="mb-0">Filter</h5>
      </Card.Header>
      <Card.Body>
        <FilterForm filterState={filterState} />
      </Card.Body>
    </Card>
  );
}
