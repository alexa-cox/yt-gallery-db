import { createAsyncThunk } from '@reduxjs/toolkit';
import { YoutubeService } from '../../services';

const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async (query, thunkAPI) => {
    try {
      const response = await YoutubeService.searchVideos(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const searchVideos = createAsyncThunk(
  'videos/searchVideos',
  async (query, thunkAPI) => {
    try {
      const response = await YoutubeService.searchVideos(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getVideoById = createAsyncThunk(
  'videos/getVideoById',
  async (query, thunkAPI) => {
    try {
      const response = await YoutubeService.getVideoById(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchVideos, searchVideos, getVideoById };
