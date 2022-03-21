export enum FILE_STATE  {
  FILE_IDLE = 1,
  FILE_UPLOADING = 2,
  FILE_ANALYNIG = 3,
  FILE_IMPORTING = 4
}

export interface IFile {
    id: string;
    name: string;
    size: number;
    date: number;
    status: string;
  }
  
  export const enum STEPS_STATUS {
    STEP0 = 1,
    STEP1 = 1,
    STEP2 = 2,
    STEP3 = 3,
    STEP4 = 4,
  }
  
  export interface IStepData {
    step: STEPS_STATUS;
    isProgress: boolean;
    error?: number;
    data?: {
      progress: number;
    }
  }