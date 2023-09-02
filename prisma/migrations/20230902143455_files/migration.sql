-- CreateTable
CREATE TABLE "totalFiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "fileId" INTEGER NOT NULL,

    CONSTRAINT "totalFiles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "totalFiles" ADD CONSTRAINT "totalFiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "totalFiles" ADD CONSTRAINT "totalFiles_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
