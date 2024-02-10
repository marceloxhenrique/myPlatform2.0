-- AlterTable
ALTER TABLE "course" ALTER COLUMN "imageUrl" SET DEFAULT 'https://utfs.io/f/b29d820f-4452-4504-a415-5fe19b5af428-223acx.png';

-- AlterTable
ALTER TABLE "lesson" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "videoUrl" DROP NOT NULL;
