-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "sectorId" INTEGER;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sector"("id") ON DELETE SET NULL ON UPDATE CASCADE;
