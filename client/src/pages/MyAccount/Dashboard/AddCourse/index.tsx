import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Textarea,
  GridItem,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCourseAction } from '../../../../services/actions/courseActions.js';
import { FormComp, useFormHook } from '../../Components/Form';

import type { UserDataProps } from '../../../../shared.types';
import ButtonComp from '../../Components/Button';

type AddCourseProps = {
  userData: UserDataProps;
};

type FormHookProps = {
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  price: string;
  language: string;
  level: string;
};

const initialvalue: FormHookProps = {
  title: '',
  description: '',
  videoUrl: '',
  thumbnail: '',
  price: '',
  language: 'english',
  level: 'beginner',
};

function AddCourse({ userData }: AddCourseProps) {
  const { _id, fullName = {} } = userData;
  const dispatch = useDispatch();
  const borderColor = useColorModeValue('gray.300', 'inherit');

  const { formDataState, handleFormChange, setFormData } =
    useFormHook<FormHookProps>(initialvalue);

  const submitAddCourse = (isValid: boolean) => {
    if (!isValid) {
      console.log('show error :>> ');
    }
    console.log('formDataState :>> ', formDataState);
    //   const { title, description, videoUrl, thumbnail, price, level } =
    //     formDataState;

    //   if (!title || !description || !videoUrl || !thumbnail || !price || !level) {
    //     return alert('Please fill required fields');
    //   }
    //   const courseData = { ...formDataState, createdBy: _id, author: fullName };
    //   // const formData = new FormData();
    //   // for (let key in courseData) {
    //   //   console.log("key :>> ", key, courseData[key]);
    //   //   formData.append(key, courseData[key]);
    //   // }
    //   // console.log("courseData :>> ", courseData);
    //   dispatch(addCourseAction(courseData));
  };

  return (
    <FormComp onFormSubmit={submitAddCourse} encType="multipart/form-data">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>

          <Input
            type="text"
            placeholder="Coure Title"
            name="title"
            onChange={handleFormChange}
            value={formDataState.title}
            borderColor={borderColor}
            required
          />
        </FormControl>

        <FormControl id="language" isRequired>
          <FormLabel>Language</FormLabel>
          <Select
            onChange={handleFormChange}
            borderColor={borderColor}
            name="language"
            value={formDataState.language}>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </Select>
        </FormControl>
        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em">
              $
            </InputLeftElement>
            <Input
              type="number"
              name="price"
              placeholder="Enter amount"
              onChange={handleFormChange}
              value={formDataState.price}
              borderColor={borderColor}
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl id="level" isRequired>
          <FormLabel>Level</FormLabel>
          <Select
            onChange={handleFormChange}
            name="level"
            borderColor={borderColor}
            value={formDataState.level}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </Select>
        </FormControl>

        <FormControl id="thumbnail" isRequired>
          <FormLabel>Thumbnail</FormLabel>
          {/* <Input
              variant="unstyled"
              p={1}
              type="file"
              name="thumbnail"
              accept="image/*"
              //
              placeholder=""
              onChange={handleFormChange}
              required
            /> */}
          <Input
            name="thumbnail"
            placeholder=""
            onChange={handleFormChange}
            value={formDataState.thumbnail}
            borderColor={borderColor}
            required
          />
        </FormControl>

        <FormControl id="videoUrl" isRequired>
          <FormLabel>Video Url</FormLabel>
          <Input
            name="videoUrl"
            placeholder=""
            onChange={handleFormChange}
            value={formDataState.videoUrl}
            borderColor={borderColor}
            required
          />
        </FormControl>

        <GridItem colSpan={2}>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              //   type="Description"
              name="description"
              placeholder=""
              onChange={handleFormChange}
              borderColor={borderColor}
              required
            />
          </FormControl>
        </GridItem>
      </Grid>
      <ButtonComp type="submit" text="Add Course" />
    </FormComp>
  );
}

export default AddCourse;
