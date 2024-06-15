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
} from '@chakra-ui/react';
import Actions from './Actions.jsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourseAction } from '../../../../services/actions/courseActions.js';

function AddCourse({ userData = {} }) {
  const { _id, fullName = {} } = userData;
  const dispatch = useDispatch();

  const [courseState, setCourse] = useState({
    title: '',
    description: '',
    videoUrl: '',
    thumbnail: '',
    price: '',
    language: 'english',
    level: 'beginner',
  });
  const handleAddCourse = (e) => {
    const { name, value } = e.target;

    // if (name === "thumbnail" && files && files[0]) {
    //   let img = e.target.files[0];
    //   setCourse((prevState) => ({
    //     ...prevState,
    //     thumbnail: img,
    //   }));
    //   return;
    // }

    name &&
      setCourse((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  };

  const submitAddCourse = (e) => {
    e.preventDefault();
    const { title, description, videoUrl, thumbnail, price, level } =
      courseState;
    if (!title || !description || !videoUrl || !thumbnail || !price || !level) {
      return alert('Please fill required fields');
    }
    const courseData = { ...courseState, createdBy: _id, author: fullName };
    // const formData = new FormData();
    // for (let key in courseData) {
    //   console.log("key :>> ", key, courseData[key]);
    //   formData.append(key, courseData[key]);
    // }
    // console.log("courseData :>> ", courseData);
    dispatch(addCourseAction(courseData));
  };

  return (
    <form onSubmit={submitAddCourse} encType="multipart/form-data">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>

          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder=""
            name="title"
            onChange={(e) => handleAddCourse(e)}
            value={courseState.title}
            required
          />
        </FormControl>

        <FormControl id="language" isRequired>
          <FormLabel>Language</FormLabel>
          <Select
            focusBorderColor="brand.blue"
            onChange={(e) => handleAddCourse(e)}
            name="language"
            value={courseState.language}>
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
              focusBorderColor="brand.blue"
              onChange={(e) => handleAddCourse(e)}
              value={courseState.price}
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl id="level" isRequired>
          <FormLabel>Level</FormLabel>
          <Select
            focusBorderColor="brand.blue"
            onChange={(e) => handleAddCourse(e)}
            name="level"
            value={courseState.level}>
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
            // focusBorderColor="brand.blue"
            placeholder=""
            onChange={(e) => handleAddCourse(e)}
            required
          /> */}
          <Input
            focusBorderColor="brand.blue"
            name="thumbnail"
            placeholder=""
            onChange={(e) => handleAddCourse(e)}
            value={courseState.thumbnail}
            required
          />
        </FormControl>

        <FormControl id="videoUrl" isRequired>
          <FormLabel>Video Url</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            name="videoUrl"
            placeholder=""
            onChange={(e) => handleAddCourse(e)}
            value={courseState.videoUrl}
            required
          />
        </FormControl>

        <GridItem colSpan={2}>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              focusBorderColor="brand.blue"
              type="Description"
              name="description"
              placeholder=""
              onChange={(e) => handleAddCourse(e)}
              required
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Actions submitHandler={submitAddCourse} />
    </form>
  );
}

export default AddCourse;
