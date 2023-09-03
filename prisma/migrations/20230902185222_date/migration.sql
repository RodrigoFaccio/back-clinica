/*
  Warnings:

  - You are about to drop the column `created_at` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `sector` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `sector` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "created_at",
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "patients" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "sector" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "created_at",
DROP COLUMN "updated_at";
